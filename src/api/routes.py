"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os 
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, PerfilVendedor, Encomiendas , PedidoAceptado, Tarifas, PerfilTransportista
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import datetime
#pipenv install flask-jwt-extended
#importar LO QUE NECESITAMOS DE JWT
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/perfilVendedor', methods=['POST', 'GET'])
def all_perfilVendedor():

    if request.method =='GET':
        all_Vendedor = PerfilVendedor.query.all()
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
        oneSeller = PerfilVendedor.query.filter_by(email=body["email"]).first()
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


@api.route("/seller", methods=['GET'])
@jwt_required()
def profile():
    if request.method == 'GET':
        token = get_jwt_identity()
        # query de usuario vendedor
       
        #si existe vendedor con ese mail  return : info vendedor con todos los datos necesarios para su vista

        return jsonify({"success": "Acceso a espacio privado", "usuario": token}), 200


@api.route('/perfilTransportista', methods=['POST', 'GET'])
def all_perfilTransportista():

    if request.method =='GET':
        all_Transportistas = PerfilTransportista.query.all()
        all_Transportistas = list(map(lambda x: x.serialize(), all_Transportistas))
    
        return jsonify(all_Transportistas), 200

    else:
        body = request.get_json() # obtener el request body de la solicitud
        if body is None:
            return "The request body is null", 400
        if 'email' not in body:
            return 'Especificar email', 400
        if 'password' not in body:
            return 'Especificar password',400
        #estoy consultando si existe alguien con el email que mande en la api y consigo la primera coincidencia
        oneTrans = PerfilTransportista.query.filter_by(email=body["email"]).first()
        if oneTrans:
            if (oneTrans.password == body["password"] ):
                #CUANDO VALIDAMOS LA PASSWORD CREAREMOS EL TOKEN
                expira = datetime.timedelta(minutes=2)
                access_token = create_access_token(identity=oneTrans.email, expires_delta=expira)
                data = {
                    "info_user": oneTrans.serialize(),
                    "token": access_token,
                    "expires": expira.total_seconds()
                }
                return(jsonify(data))
            else:
                return(jsonify({"mensaje":False}))
        else:
            return(jsonify({"mensaje":"mail no se encuentra registrado"}))



@api.route('/encomiendas', methods=['GET'])
def all_encomiendas():
    all_encomiendas = Encomiendas.query.all()    
    all_encomiendas = list(map(lambda x: x.serialize(), all_encomiendas))
    return jsonify(all_encomiendas), 200

@api.route('/pedidoAceptado', methods=['GET'])
def all_pedidoAceptado():
    all_pedidoAceptado = PedidoAceptado.query.all()    
    all_pedidoAceptado = list(map(lambda x: x.serialize(), all_pedidoAceptado))
    return jsonify(all_pedidoAceptado), 200

@api.route('/tarifas', methods=['GET'])
def all_tarifas():
    all_tarifas = Tarifas.query.all()    
    all_tarifas = list(map(lambda x: x.serialize(), all_tarifas))
    return jsonify(all_tarifas), 200 

 