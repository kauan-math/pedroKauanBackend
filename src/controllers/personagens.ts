import type { Request, Response } from "express";
import prisma from "../../helpers/config/prisma";
import { handleError } from "../../helpers/handleError";


export default {
create: async( request: Request,response: Response) => {
        try{
            const {nome, tecnicaAmaldicoada , idade, grau, clan, dominio} = request.body;

            if (!nome || !tecnicaAmaldicoada || !idade || !grau || !clan || !dominio) {
                return response.status(400).json({error: "Dados do Personagem incompletos"})
            }

            const user = await prisma.personagem.create({
                data: {
                    nome,
                    tecnicaAmaldicoada,
                    idade,
                    grau,
                    clan,
                    dominio,
                },
            })
            console.log("Usuário criado.");
            return response.status(201).json(user);
        } catch(e: any){
          console.error(e);
            return handleError(e, response);
        }
    },
    
    list: async (request: Request, response: Response) => {
        try{
            const users = await prisma.personagem.findMany();
            return response.status(200).json(users);
        }catch(e){
            return handleError(e, response);
        }
    },

  getByid: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const user = await prisma.personagem.findUnique({
        where: {
          id: +id,
        },
      });
      return response.status(200).json(user);
    } catch (e) {
      return handleError(e, response);
    }
  },

  update: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { nome, tecnicaAmaldicoada, idade, grau, clan, dominio } = request.body;
      const user = await prisma.personagem.update({
        data: {
          nome,
          tecnicaAmaldicoada,
          idade,
          grau,
          clan,
          dominio,
        },
        where: { id: +id },
      });
      return response.status(200).json(user);
    } catch (e) {
      return handleError(e, response);
    }
  },

  delete: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const user = await prisma.personagem.delete({
        where: {
          id: +id,
        },
      });
      return response.status(200).json(user);
    } catch (e) {
      return handleError(e, response);
    }
  },
};