import { NextFunction, Response, Request } from "express";
import Products from "../models/products.model";
import { ProductInt } from "../Interfaces/ProductInt";

const productsControllers = {
  getAllProducts: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await Products.find()
        .exec()
        .catch((e) => next(e));

      res.status(200).json({
        message: "obtenido correctamente",
        data: products,
      });
    } catch (error) {
      res.status(404).json({
        messages: "Error al obtener los datos",
        error: error,
      });
    }
  },
  getProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await Products.findOne({ _id: req.params.id })
        .exec()
        .catch((e) => next(e));

      res.status(200).json({
        data: product,
      });
    } catch (error) {
      res.status(404).json({
        messages: "Error al obtener los datos",
        error: error,
      });
    }
  },
  newProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newProduct: ProductInt = {
        name: req.body.name,
        wood: req.body.wood,
        price: req.body.price,
        size: req.body.size,
        assembly: req.body.assembly,
      };

      const product = await Products.create(newProduct).catch((e) => next(e));

      res.json({
        message: "Product created successfully",
        data: product,
      });
    } catch (error) {
      res.status(404).json({
        messages: "Error al obtener los datos",
        error: error,
      });
    }
  },
  deleteProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Products.findOneAndDelete({ _id: req.params.id })
        .exec()
        .catch((e) => next(e));

      res.json({
        message: `Product deleted successfully`,
        data: req.params.id,
      });
    } catch (error) {
      next(error);
      res.json({
        messages: "Error en el Servidor",
        error: error,
      });
    }
  },
};

export default productsControllers;
