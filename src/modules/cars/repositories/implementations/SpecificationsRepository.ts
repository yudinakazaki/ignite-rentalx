import { Specification } from '../../models/Specification'
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification(name, description)

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
    return this.specifications.find((specification) => specification.name === name)
  }
}

export { SpecificationsRepository }
