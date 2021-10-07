import  {Request, Response} from 'express';
import {Op} from 'sequelize'
import usuario from '../models/user';

export const getUsers = async (req: Request, res: Response)=>{

    const users = await usuario.findAll();

    res.json({users});

}

export const getUser = async (req: Request, res: Response)=>{

    const {id} = req.params;

    const user = await usuario.findByPk(id);
    console.log(user)

    if(!user){
        res.status(400).send(`No existe el usuario de id ${id}`)
    } else{
        res.json({
            msg:'Usuario ' + id,
            id
        })
        
    }
}

export const validateUserName = async (req: Request, res: Response)=>{

    const {userName} = req.body;
    
    console.log(userName)
    try {
        
        const validate = await usuario.findOne({
            attributes:['userName'],
            where:{
                userName: userName
            }
        })
    
        if(validate || userName.length<4){
            return res.status(400).json({msg: `Este usuario ya esta registrado`})
        }
    
        res.status(200).json({
            msg: `Nombre de usuario disponible`
        })
    } catch (error) {
        res.send(error)
    }

}

export const postUser = async (req: Request, res: Response)=>{

    const {body} = req;
    console.log(req.body);

    try {

        const username = usuario.findOne({
            where:{
                userName: body.userName
            }
        })

        const mail = usuario.findOne({
            where:{
                email: body.email
            }
        })

        const exist = await Promise.all([username, mail])

        console.log(exist)
        
        if(exist[0]){
            return res.status(400).send({
                msg: `Usuario ya existente`
            })
        } else if(exist[1]){
            return res.status(400).send({
                msg: `El email ya se encuentra registrado`
            })
        }

        const user = await usuario.create(body);
        res.json(user);

    } catch (error: any) {
        
        res.status(500).send({
            msg: 'Hable con el admininstrador'
        })
    }

}

export const putUser =(req: Request, res: Response)=>{

    const {id} = req.params;
    const {body} = req

    res.json({
        msg:'Usuario actualizado',
        body
    })

}

export const deleteUser =(req: Request, res: Response)=>{

    const {id} = req.params;

    res.json({
        msg:'Usuario '+id+' eliminado',
        id
    })

}