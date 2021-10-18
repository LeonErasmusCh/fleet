from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Vendedor(db.Model):
    __tablename__= 'vendedor'
    id_vendor = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    lastName = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    rut = db.Column(db.String(50), unique=True, nullable=False)
    initialAddress = db.Column(db.String(50), unique=True, nullable=False)
    phone = db.Column(db.String(50), unique=True, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    def serialize(self):
        return {
            "id_vendor": self.id_vendor,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "email": self.email,
            # "rut": self.rut,
            "initialAddress": self.initialAddress,
            "phone": self.phone,
            # "password": self.password,
            # do not serialize the password, its a security breach
        }


class Encomiendas(db.Model):
    id_package = db.Column(db.Integer,  primary_key=True, unique=True)
    status = db.Column(db.String(20), unique=False, nullable=True)
    originAddress =db.Column(db.String(50), unique=True)
    destinationAddress = db.Column(db.String(50), unique=True)
    zone = db.Column(db.String(50), unique=False, nullable=True)
    zoneDestino = db.Column(db.String(50), unique=False, nullable=True)
    weight = db.Column(db.String(50), unique=False, nullable=True)
    dimensions = db.Column(db.String(50), unique=False, nullable=True)
    price = db.Column(db.String(50), unique=False, nullable=True)
    mensaje = db.Column(db.String(1000), unique=False, nullable=True)
    id_transport = db.Column(db.Integer,db.ForeignKey('transportista.id_transport'))
    name_transport = db.Column(db.String(50), unique=False, nullable=True)
    phone_transport = db.Column(db.Integer,  nullable=True, unique=False)
    id_seller = db.Column(db.Integer,db.ForeignKey('vendedor.id_vendor'))
    name_seller = db.Column(db.String(50), unique=False, nullable=True)
    phone_seller = db.Column(db.Integer,  nullable=True, unique=False)
    rating = db.Column(db.Integer,  nullable=True, unique=False)
    
    
    Transport = db.relationship('Transportista')
    Seller = db.relationship("Vendedor")
    def serialize(self):
        return {
            "id_package": self.id_package,
            "status": self.status,
            "originAddress": self.originAddress,
            "destinationAddress": self.destinationAddress,
            "zone": self.zone,
            "zoneDestino": self.zoneDestino,
            "weight": self.weight,
            "dimensions":self.dimensions,
            "mensaje":self.mensaje,
            "id_transport": self.id_transport,
            "name_transport": self.name_transport,
            "phone_transport": self.phone_transport,
            "id_seller": self.id_seller,
            "name_seller": self.name_seller,
            "phone_seller": self.phone_seller,
            "rating": self.rating,
            "price": self.price 
        }


class Tarifas(db.Model):
    id_fee = db.Column(db.Integer, primary_key=True)
    id_transport = db.Column(db.Integer,db.ForeignKey('transportista.id_transport'))
    name_transport = db.Column(db.String(50), unique=False, nullable=False)
    zone =  db.Column(db.String(50), unique=False, nullable=False)
    zoneDestino = db.Column(db.String(50), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    rel = db.relationship('Transportista')
    #rel1 = db.relationship("Encomiendas", foreign_keys=[destinationAddress])
    def serialize(self):
        return {
            "id_fee": self.id_fee,
            "id_transport": self.id_transport,
            "name_transport": self.name_transport,
            "zone": self.zone,
            "zoneDestino": self.zoneDestino,
            "price": self.price
        }

class Transportista(db.Model):
    __tablename__= "transportista"
    id_transport = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    lastName = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    rut = db.Column(db.String(50), unique=True, nullable=False)
    transAddress = db.Column(db.String(50), unique=False, nullable=False)
    phone = db.Column(db.String(50), unique=True, nullable=False)
    #rel2 = db.relationship("Tarifas", foreign_keys=[phone])
    def serialize(self):
        return {
            "id_transport": self.id_transport,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "email": self.email,
            # "rut": self.rut,
            "transAddress": self.transAddress,
            "phone": self.phone,
            # "password": self.password,
        }
