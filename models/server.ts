import express, {Application} from 'express';
import routes from '../routes/usuario';
import morgan from 'morgan'
import cors from 'cors'
import db from '../db/connection';

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor(){
        console.log(db.models)
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.app.use(morgan('dev'))
        this.dbConnection();
        this.middlewares();
        //Agregar los middelwares
        this.routes();
        //Definición de las rutas

    }

    middlewares(){
        //Cors
        this.app.use(cors());
        //Lectura del body
        this.app.use(express.json());
        //carpeta pública
        // this.app.use( express.static('Nombre de carpeta con index.html estatico'));
    }

    async dbConnection(){
        try {
            console.log(db.models)
            db.sync({force:true})
            await db.authenticate();
            console.log('Funciona la coneccion')
        } catch (error: any) {
            throw new Error( error );
        }
    }

    routes(){

        this.app.use(this.apiPaths.users, routes)

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Escuchando en el puesto ' + this.port)
        })
    }

}

export default Server;