"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//----------------------------------------------------------------------------------------------------------------------//
//-----------------------------------CONEXION Y CONFIGURACION-----------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require("mysql");
//Variable para conexion
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'TriviaSano'
});
//Generar conexion mysql
connection.connect(function (err) {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
    }
    else {
        console.log('Conexion establecida ' + connection.threadId);
    }
});
//create application/json parser
var jsonParser = bodyParser.json();
//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//Generar conexion postman
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
app.use(cors());
//--------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------CRUD------------------------------------------------------------//
//--------------------------------------CREATE (post), READ (get), UPDATE (put, path), DELETE (delete)----------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------GET-USUARIO----------------------------------------------------------------//
//--------------------------validar si existe el usuario por el id, que es el correo------------------------------------//
//----------------------------------------------------------------------------------------------------------------------//
app.get('/usuarios/correo', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var correo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                correo = req.body.correo;
                return [4 /*yield*/, connection.query("select correo from usuarios where correo=?", [correo], function (error, results, field) {
                        /*console.log(`results: ${JSON.stringify(results)}`);
                        console.log(`correoooo: ${JSON.stringify(correo)}`);*/
                        var aux = "[{\"correo\":\"" + correo + "\"}]";
                        //console.log(`aux: ${aux}`);
                        if (aux == JSON.stringify(results)) {
                            console.log("SI EXISTE EL CORREO: " + correo);
                            res.send('El usuario ya existe en el sistema');
                            return 1;
                        }
                        else {
                            console.log("NO EXISTE EL CORREO");
                            res.send('El usuario no existe en el sistema');
                            return 0;
                        }
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//GET
app.get('/usuarios', function (req, res) {
    var qr = "select * from usuarios";
    connection.query(qr, function (err, result) {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all user data',
                data: result
            });
        }
    });
});
//GET SINGLE
app.get('/usuarios/:correo', jsonParser, function (req, res) {
    var gCorreo = req.params.correo;
    connection.query("select * from usuarios where correo = ?", [gCorreo], function (err, result) {
        //console.log(JSON.stringify(result));
        res.send({
            message: 'get single data',
            data: result
        });
    });
});
//----------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------GET-LOGIN--------------------------------------------------------------//
//----------validar si la contraseña ingresada es la misma que la del usuario segun su id, que es el correo-------------//
//----------------------------------------------------------------------------------------------------------------------//
app.get('/usuarios/login', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var correo, contrasenna;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                correo = req.body.correo;
                contrasenna = req.body.contrasenna;
                console.log("La contraseña ingresada es :" + contrasenna);
                console.log("El correo ingresado es: " + correo);
                return [4 /*yield*/, connection.query("select contrasenna from usuarios where correo = ?", [correo], function (error, results, field) {
                        var aux = "[{\"contrasenna\":\"" + contrasenna + "\"}]";
                        //console.log("la contraseña es: " + contrasenna);
                        //console.log("el resultado de la consulta es: " + JSON.stringify(results));
                        //console.log("el aux es: " + aux);
                        if (aux == JSON.stringify(results)) {
                            console.log("LA CONTRASE\u00D1A ES CORRECTA: " + contrasenna);
                            res.send('Contraseña validada con exito');
                            return 1;
                        }
                        else {
                            console.log("CONTRASE\u00D1A INCORRECTA");
                            res.send('Contraseña incorrecta');
                            return 0;
                        }
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//----------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------POST-------------------------------------------------------------------//
//--------------------crear un nuevo usuario dados los valores de todos los atributos-----------------------------------//
//----------------------------------------------------------------------------------------------------------------------//
app.post('/usuarios/', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var correo, contrasenna, nombre, edad, fechaNacimiento, sexo, estatura, peso, enfermedadCardiaca, enfermedadRespiratoria, cirugia, alergia, enfermedadDegenerativa, futbol, baloncesto, voleyball, salsa, zumba, folklor, nuevoUsuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                correo = req.body.correo;
                contrasenna = req.body.contrasenna;
                nombre = req.body.nombre;
                edad = req.body.edad;
                fechaNacimiento = req.body.fechaNacimiento;
                sexo = req.body.sexo;
                estatura = req.body.estatura;
                peso = req.body.peso;
                enfermedadCardiaca = req.body.enfermedadCardiaca;
                enfermedadRespiratoria = req.body.enfermedadRespiratoria;
                cirugia = req.body.cirugia;
                alergia = req.body.alergia;
                enfermedadDegenerativa = req.body.enfermedadDegenerativa;
                futbol = req.body.futbol;
                baloncesto = req.body.baloncesto;
                voleyball = req.body.voleyball;
                salsa = req.body.salsa;
                zumba = req.body.zumba;
                folklor = req.body.folklor;
                nuevoUsuario = {
                    correo: correo,
                    contrasenna: contrasenna,
                    nombre: nombre,
                    edad: edad,
                    fechaNacimiento: fechaNacimiento,
                    sexo: sexo,
                    estatura: estatura,
                    peso: peso,
                    enfermedadCardiaca: enfermedadCardiaca,
                    enfermedadRespiratoria: enfermedadRespiratoria,
                    cirugia: cirugia,
                    alergia: alergia,
                    enfermedadDegenerativa: enfermedadDegenerativa,
                    futbol: futbol,
                    baloncesto: baloncesto,
                    voleyball: voleyball,
                    salsa: salsa,
                    zumba: zumba,
                    folklor: folklor
                };
                return [4 /*yield*/, connection.query("insert into usuarios set ?", [nuevoUsuario])];
            case 1:
                _a.sent();
                res.send({
                    message: 'data inserted'
                });
                return [2 /*return*/];
        }
    });
}); });
//METODO POST LOGIN
app.post('/usuarios/login', jsonParser, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var correo, contrasenna, contrasennaValidada, correoValidado;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                correo = request.body.correo;
                contrasenna = request.body.contrasenna;
                contrasennaValidada = 0;
                correoValidado = 0;
                console.log("CORREO ENTRO EN EL GET: " + correo);
                console.log("CONTRASEÑA ENTRO EN EL GET: " + contrasenna);
                return [4 /*yield*/, connection.query("select correo from usuarios where correo=?", [correo], function (error, results, field) {
                        console.log("results: " + JSON.stringify(results));
                        console.log("correoooo: " + JSON.stringify(correo));
                        var auxCorreo = "[{\"correo\":\"" + correo + "\"}]";
                        console.log("aux: " + auxCorreo);
                        if (auxCorreo == JSON.stringify(results)) {
                            console.log("SI EXISTE EL CORREO: " + correo);
                            //res.send('El usuario ya existe en el sistema');
                            correoValidado = 1;
                        }
                        else {
                            console.log("NO EXISTE EL CORREO");
                            //res.send('El usuario no existe en el sistema');
                            correoValidado = 0;
                        }
                        if (correoValidado == 1) {
                            console.log("La contraseña ingresada es :" + contrasenna);
                            //console.log("El correo ingresado es: "+ correo);
                            connection.query("select contrasenna from usuarios where correo = ?", [correo], function (error, results, field) {
                                var auxContrasenna = "[{\"contrasenna\":\"" + contrasenna + "\"}]";
                                //console.log("la contraseña es: " + contrasenna);
                                //console.log("el resultado de la consulta es: " + JSON.stringify(results));
                                //console.log("el aux es: " + aux);
                                if (auxContrasenna == JSON.stringify(results)) {
                                    console.log("CONTRASE\u00D1A: " + contrasenna);
                                    //res.send('Usuario validada con exito');
                                    contrasennaValidada = 1;
                                }
                                else {
                                    console.log("CONTRASE\u00D1A INCORRECTA");
                                    //res.send('Usuario no validado');
                                    contrasennaValidada = 0;
                                }
                            });
                        }
                        //console.log(usuarioValidado);
                        //console.log(contrasennaValidada);
                        if (correoValidado == 1 && contrasennaValidada == 1) {
                            return 1;
                        }
                        return 0;
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//----------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------DELETE-------------------------------------------------------------------//
//-----------------------borrar un usuario segun la id ingresada, que es el correo--------------------------------------//
//----------------------------------------------------------------------------------------------------------------------//
app.delete('/usuarios/:correo', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var correo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                correo = req.params.correo;
                //console.log("correo: ${correo}", correo);
                return [4 /*yield*/, connection.query("delete from usuarios where correo = ?", [correo])];
            case 1:
                //console.log("correo: ${correo}", correo);
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//----------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------PUT--------------------------------------------------------------------//
//-------------actualizar un usuario segun la id ingresada, que es el correo, y con los valores dados-------------------//
//----------------------------------------------------------------------------------------------------------------------//
app.put('/usuarios/:correo', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var correo, contrasenna, nombre, edad, fechaNacimiento, sexo, estatura, peso, enfermedadCardiaca, enfermedadRespiratoria, cirugia, alergia, enfermedadDegenerativa, futbol, baloncesto, voleyball, salsa, zumba, folklor;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                correo = req.body.correo;
                contrasenna = req.body.contrasenna;
                nombre = req.body.nombre;
                edad = req.body.edad;
                fechaNacimiento = req.body.fechaNacimiento;
                sexo = req.body.sexo;
                estatura = req.body.estatura;
                peso = req.body.peso;
                enfermedadCardiaca = req.body.enfermedadCardiaca;
                enfermedadRespiratoria = req.body.enfermedadRespiratoria;
                cirugia = req.body.cirugia;
                alergia = req.body.alergia;
                enfermedadDegenerativa = req.body.enfermedadDegenerativa;
                futbol = req.body.futbol;
                baloncesto = req.body.baloncesto;
                voleyball = req.body.voleyball;
                salsa = req.body.salsa;
                zumba = req.body.zumba;
                folklor = req.body.folklor;
                return [4 /*yield*/, connection.query("update usuarios set contrasenna = ?,  nombre = ?, edad = ?, fechaNacimiento = ?, sexo = ?, estatura = ?,  peso = ?, enfermedadCardiaca = ?, enfermedadRespiratoria = ?, cirugia = ?, alergia = ?, enfermedadDegenerativa = ?, futbol = ?, baloncesto = ?, voleyball = ?, salsa = ?, zumba = ?, folklor = ?  where correo = ?", [contrasenna, nombre, edad, fechaNacimiento, sexo, estatura, peso, enfermedadCardiaca, enfermedadRespiratoria, cirugia, alergia, enfermedadDegenerativa, futbol, baloncesto, voleyball, salsa, zumba, folklor, correo])];
            case 1:
                _a.sent();
                res.send({
                    message: 'data updated'
                });
                return [2 /*return*/];
        }
    });
}); });
//----------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------LISTEN--------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------//
app.listen(configuracion, function () {
    console.log("Conectandome al servidor http://localhost:" + configuracion.port);
});
