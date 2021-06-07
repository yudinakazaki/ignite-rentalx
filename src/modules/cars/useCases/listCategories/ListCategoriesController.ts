import { Request, Response } from 'express'

import { ListCategoriesUseCase } from '../../useCases/listCategories/ListCategoriesUseCase'

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  hande(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute()

    return response.json(all)
  }
}

export { ListCategoriesController }
