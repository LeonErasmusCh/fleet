"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os 
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Vendedor, Encomiendas, Tarifas,Transportista
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import datetime
# pipenv install flask-jwt-extended
#importar LO QUE NECESITAMOS DE JWT
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/register', methods=['POST'])
def post_register():    
    body=request.get_json()
    if body is None:
        return "The request body is null", 400
    if 'name' not in body:
        return "Nombre no puede estar vacío",400
    if 'lastName' not in body:
        return "Apellido no puede estar vacío",400
    if 'rut' not in body:
        return "RUT no puede estar vacío",400
    if 'email' not in body:
        return "E-mail no puede estar vacío",400  
    if 'phone'not in body:
        return "Teléfono no puede estar vacío",400
    if 'initialAddress'not in body:
        return "Dirección no puede estar vacío",400
    if 'password'not in body:
        return "Contraseña no puede estar vacío",400
    # if 'is_active'not in body:
    #     return "Activo no puede estar vacío",400
    

    newRegister= Vendedor (name=body['name'], lastName=body['lastName'], rut=body['rut'], email=body['email'], phone=body['phone'], initialAddress=body['initialAddress'], password=body['password'])
    db.session.add(newRegister)
    db.session.commit()
    response_body={
        "msg": "Usuario Registrado"
    }
    return jsonify(response_body),200

@api.route('/register2', methods=['POST'])
def post_register2():    
    body=request.get_json()
    if body is None:
        return "The request body is null", 400
    if 'name' not in body:
        return "Nombre no puede estar vacío",400
    if 'lastName' not in body:
        return "Apellido no puede estar vacío",400
    if 'rut' not in body:
        return "RUT no puede estar vacío",400
    if 'email' not in body:
        return "E-mail no puede estar vacío",400  
    if 'phone'not in body:
        return "Teléfono no puede estar vacío",400
    if 'transAddress'not in body:
        return "Dirección no puede estar vacío",400
    if 'password'not in body:
        return "Contraseña no puede estar vacío",400
    # if 'is_active'not in body:
    #     return "Activo no puede estar vacío",400
    

    newRegister2= Transportista (name=body['name'], lastName=body['lastName'], rut=body['rut'], email=body['email'], phone=body['phone'], transAddress=body['transAddress'], password=body['password'])
    db.session.add(newRegister2)
    db.session.commit()
    response_body={
        "msg": "Usuario Registrado"
    }
    return jsonify(response_body),200



@api.route('/Vendedor', methods=['POST', 'GET'])
def all_Vendedor():

    if request.method =='GET':
        all_Vendedor = Vendedor.query.all()
        all_Vendedor = list(map(lambda x: x.serialize(), all_Vendedor))
    
        return jsonify(all_Vendedor), 200

    else:
        body = request.get_json() # obtener el request body de la solicitud
        if body is None:
            return "The request body is null", 400
        if 'email' not in body:
            return 'Especificar email', 400
        if 'password' not in body:
            return 'Especificar password',400
        #estoy consultando si existe alguien con el email que mande en la api y consigo la primera coincidencia
        oneSeller = Vendedor.query.filter_by(email=body["email"]).first()
        if oneSeller:
            if (oneSeller.password == body["password"] ):
                #CUANDO VALIDAMOS LA PASSWORD CREAREMOS EL TOKEN
                expira = datetime.timedelta(minutes=2)
                access_token = create_access_token(identity=oneSeller.email, expires_delta=expira)
                data = {
                    "info_user": oneSeller.serialize(),
                    "token": access_token,
                    "expires": expira.total_seconds()
                }
                return(jsonify(data))
            else:
                return(jsonify({"mensaje":False}))
        else:
            return(jsonify({"mensaje":"mail no se encuentra registrado"}))



        
        #token = get_jwt_identity()
       
        # query de usuario vendedor
       
        #si existe vendedor con ese mail  return : info vendedor con todos los datos necesarios para su vista

        #return jsonify({"success": "Acceso a espacio privado", "usuario": token}), 200


@api.route('/Transportista', methods=['POST', 'GET'])

def all_Transportista():

    if request.method =='GET':
        all_Transportista = Transportista.query.all()
        all_Transportista = list(map(lambda x: x.serialize(), all_Transportista))
    
        return jsonify(all_Transportista), 200

    else:
        body = request.get_json() # obtener el request body de la solicitud
        if body is None:
            return "The request body is null", 400
        if 'email' not in body:
            return 'Especificar email', 400
        if 'password' not in body:
            return 'Especificar password',400
        #estoy consultando si existe alguien con el email que mande en la api y consigo la primera coincidencia
        oneTrans = Transportista.query.filter_by(email=body["email"]).first()
        if oneTrans:
            if (oneTrans.password == body["password"] ):
                #CUANDO VALIDAMOS LA PASSWORD CREAREMOS EL TOKEN
                access_token = create_access_token(identity=oneTrans.email)
                data = {
                    "info_user": oneTrans.serialize(),
                    "token": access_token,

                }
                return(jsonify(data))
            else:
                return(jsonify({"mensaje":False}))
        else:
            return(jsonify({"mensaje":"mail no se encuentra registrado"}))


@api.route("/dashTrans", methods=['GET'])
@jwt_required()
def profileTrans():

    if request.method == 'GET':
        identity = get_jwt_identity()
        oneTrans = Transportista.query.filter_by(email=identity).first()
        return jsonify({ "identity": identity, "perfil": oneTrans.serialize()}), 200

@api.route("/seller", methods=['GET'])
@jwt_required()
def profile():
    if request.method == 'GET':
        identity = get_jwt_identity()
        oneSeller = Vendedor.query.filter_by(email=identity).first()
        return jsonify({ "identity": identity, "info_user": oneSeller.serialize()}), 200

 
        email = get_jwt_identity()
        oneTrans = Transportista.query.filter_by(email=identity).first()
        return jsonify({ "identity": email, "info_user":  oneTrans.serialize()}), 200



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

   response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

   return jsonify(response_body), 200


@api.route('/encomiendas', methods=['POST', 'GET'])
def all_encomiendas():
    if request.method =='GET':
        all_encomiendas = Encomiendas.query.all()    
        all_encomiendas = list(map(lambda x: x.serialize(), all_encomiendas))
        return jsonify(all_encomiendas), 200

    else:
        body = request.get_json() # obtener el request body de la solicitud
        if body is None:
            return "The request body is null", 400
        if 'mensaje' not in body:
            return 'solicitud vacia', 400
        else:
          return(jsonify({"mensaje":"mensaje enviado"})), 200
             
@api.route('/tarifas', methods=['GET'])
def all_tarifas():
    all_tarifas = Tarifas.query.all()    
    all_tarifas = list(map(lambda x: x.serialize(), all_tarifas))
    return jsonify(all_tarifas), 200 

@api.route('/tablaTarifas', methods=['POST'])
def post_tablaTarifas():    
    body=request.get_json()
    if body is None:
        return "The request body is null", 400
    if 'price' not in body:
        return "Tarifa no puede estar vacía",400
    if 'zone' not in body:
        return "Zona de Origen no puede estar vacía",400
    if 'zoneDestino' not in body:
        return "Zona de Destino no puede estar vacía",400

    newTablaTarifas= Tarifas (price=body['price'], zone=body['zone'], zoneDestino=body['zoneDestino'])
    db.session.add(newTablaTarifas)
    db.session.commit()
    response_body={
        "msg": "Tarifas Registradas"
    }
    return jsonify(response_body),200 

@api.route('/pedidos', methods=['POST'])
def post_pedidos():    
    body=request.get_json()
    if body is None:
        return "The request body is null", 400
    if 'status' not in body:
        return "Estado no puede estar vacío",400
    if 'destinationAddress' not in body:
        return "Dirección de destino no puede estar vacía",400
    if 'originAddress' not in body:
        return "Dirección de Origen no puede estar vacía",400
    if 'mensaje' not in body:
        return "Mensaje no puede estar vacío",400


    newPedidos= Encomiendas (status=body['status'], destinationAddress=body['destinationAddress'], originAddress=body['originAddress'], mensaje=body['mensaje'])
    db.session.add(newPedidos)
    db.session.commit()
    response_body={
        "msg": "Encomienda Registrada"
    }
    return jsonify(response_body),200 


