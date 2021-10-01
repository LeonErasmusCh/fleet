"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, PerfilVendedor, Encomiendas , PedidoAceptado, Tarifas, PerfilTransportista
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

   response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

   return jsonify(response_body), 200

@api.route('/perfilVendedor', methods=['GET'])
def all_vendedores():
    all_perfilVendedor = PerfilVendedor.query.all()    
    all_perfilVendedor = list(map(lambda x: x.serialize(), all_perfilVendedor))
    return jsonify(all_perfilVendedor), 200

  

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

@api.route('/perfilTransportista', methods=['GET'])
def all_perfilTransportista():
    all_perfilTransportista = PerfilTransportista.query.all()    
    all_perfilTransportista = list(map(lambda x: x.serialize(), all_perfilTransportista))
    return jsonify(all_perfilTransportista), 200       