from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class PerfilVendedor(db.Model):
    __tablename__= 'perfilvendedor'
    id_vendor = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    lastName = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    rut = db.Column(db.String(50), unique=True, nullable=False)
    initialAddress = db.Column(db.String(50),unique=True)
    lat = db.Column(db.Float())
    lng = db.Column(db.Float())
    phone = db.Column(db.String(50), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    
    def serialize(self):
        return {
            "id_vendor": self.id_vendor,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "email": self.email,
            "rut": self.rut,
            "initialAddress": self.initialAddress,
            "lat": self.lat,
            "lng": self.lng,
            "phone": self.phone,
            # do not serialize the password, its a security breach
        }

class Encomiendas(db.Model):
    __tablename__= 'encomiendas'
    id_package = db.Column(db.Integer,  primary_key=True, unique=True)
    status = db.Column(db.String(50), unique=False, nullable=False)
    lat = db.Column(db.DECIMAL(5, 5),unique=True)
    lng = db.Column(db.DECIMAL(5, 5),unique=True)
    originAddress = db.Column(db.String(50), db.ForeignKey('perfilvendedor.initialAddress'), unique=True, nullable=False)
    destinationAddress = db.Column(db.String(50), unique=True)
    zone = db.Column(db.String(50), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    rel = db.relationship("PerfilVendedor")

    def serialize(self):
        return {
            "id_package": self.id_package,
            "status": self.status,
            "lat": self.lat,
            "lng": self.lng,
            "originAddress": self.originAddress,
            "destinationAddress": self.destinationAddress,
            "zone": self.zone,
        }

class PedidoAceptado(db.Model):
    __tablename__="pedidoaceptado"
    id_pedido = db.Column(db.Integer,  primary_key=True)
    id_package = db.Column(db.Integer, db.ForeignKey('encomiendas.id_package'), unique=True)
    status = db.Column(db.String(50), db.ForeignKey('encomiendas.status'), unique=True, nullable=False)
    destinationAddress = db.Column(db.String(50), db.ForeignKey('encomiendas.destinationAddress'), unique=True)
    originAddress = db.Column(db.String(50), db.ForeignKey('encomiendas.originAddress'), unique=True, nullable=False)
    zone = db.Column(db.String(50), db.ForeignKey('encomiendas.zone'), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    


    def serialize(self):
        return {
            "id_package": self.id_package,
            "status": self.status,
            "destinationAddress": self.destinationAddress,
            "originAddress": self.originAddress,
            "zone": self.zone,
        }

class Tarifas(db.Model):
    id_fee = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.String(50), unique=False, nullable=False)
    destinationAddress = db.Column(db.String(50), db.ForeignKey('encomiendas.destinationAddress'), unique=True, nullable=False)
    originAddress = db.Column(db.String(50), db.ForeignKey('encomiendas.originAddress'), unique=True, nullable=False)
    zone = db.Column(db.String(50), db.ForeignKey('encomiendas.zone'), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    phone = db.Column(db.String(50), db.ForeignKey('perfiltransportista.phone'), unique=True, nullable=False)
    #rel = db.relationship('Encomiendas')
    rel1 = db.relationship("Encomiendas", foreign_keys=[destinationAddress])


    def serialize(self):
        return {
            "id_fee": self.id_fee,
            "price": self.price,
            "destinationAddress": self.destinationAddress,
            "originAddress": self.originAddress,
            "zone": self.zone,
        }
class PerfilTransportista(db.Model):
    __tablename__= "perfiltransportista"
    id_transport2 = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    lastName = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    rut = db.Column(db.String(50), unique=True, nullable=False)
    transAddress = db.Column(db.String(50), unique=False, nullable=False)
    phone = db.Column(db.String(50), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    relationship = db.relationship('Tarifas')
    #rel2 = db.relationship("Tarifas", foreign_keys=[phone])


    def serialize(self):
        return {
            "id_transport2": self.id_transport2,
            "email": self.email,
            "lastName": self.lastName,
            "email": self.email,
            "rut": self.rut,
            "transAddress": self.transAddress,
            "phone": self.phone,
        }
