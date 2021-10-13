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
            "rut": self.rut,
            "initialAddress": self.initialAddress,
            "phone": self.phone,
            "password": self.password,
            # do not serialize the password, its a security breach
        }
class Direcciones(db.Model):
    __tablename__= 'direcciones'
    id_direccion = db.Column(db.Integer, primary_key=True)
    direccion = db.Column(db.String(50), unique=False, nullable=False)
    pertenece = db.Column(db.Integer, db.ForeignKey('vendedor.id_vendor'))
    vendedor = db.relationship("Vendedor")
    
    def serialize(self):
        return {
            "id_direccion": self.id_direccion,
            "emdireccionail": self.direccion,
            "pertenece": self.pertenece,
        }

class Encomiendas(db.Model):
    id_package = db.Column(db.Integer,  primary_key=True, unique=True)
    status = db.Column(db.String(50), unique=False, nullable=False)
    destinationAddress = db.Column(db.String(50), unique=False)
    originAddress =db.Column(db.Integer, db.ForeignKey('direcciones.id_direccion'))
    zone = db.Column(db.String(50), unique=False, nullable=False)
    mensaje = db.Column(db.String(1000), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    rel = db.relationship("Direcciones")
    transport = db.Column(db.Integer,db.ForeignKey('transportista.id_transport'))
    rel = db.relationship('Transportista')
    def serialize(self):
        return {
            "id_package": self.id_package,
            "status": self.status,
            "destinationAddress": self.destinationAddress,
            "originAddress": self.originAddress,
            "zone": self.zone,
            "transport": self.transport,
            "mensaje":self.mensaje
        }


class Tarifas(db.Model):
    id_fee = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.String(50), unique=False, nullable=False)
    #destinationAddress = db.Column(db.String(50), db.ForeignKey('encomiendas.destinationAddress'), unique=True, nullable=False)
    #originAddress = db.Column(db.String(50), db.ForeignKey('encomiendas.originAddress'), unique=True, nullable=False)
    transport = db.Column(db.Integer,db.ForeignKey('transportista.id_transport'))
    zone =  db.Column(db.String(50), unique=False, nullable=False)
    zoneDestino = db.Column(db.String(50), unique=False, nullable=False)
    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    #phone = db.Column(db.String(50), db.ForeignKey('perfiltransportista.phone'), unique=True, nullable=False)
    rel = db.relationship('Transportista')
    #rel1 = db.relationship("Encomiendas", foreign_keys=[destinationAddress])
    def serialize(self):
        return {
            "id_fee": self.id_fee,
            "price": self.price,
            #"destinationAddress": self.destinationAddress,
            #"originAddress": self.originAddress,
            "zone": self.zone,
            "zoneDestino": self.zoneDestino,
            "transportista": self.transport
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
            "id_transport2": self.id_transport,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "email": self.email,
            "rut": self.rut,
            "transAddress": self.transAddress,
            "phone": self.phone,
            "password": self.password,
        }
