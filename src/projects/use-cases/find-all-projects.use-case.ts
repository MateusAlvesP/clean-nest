import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../project.repository';

@Injectable()
export class FindAllProjecstUseCase {
  @Inject('IProjectRepository')
  private readonly projectRepo: IProjectRepository;

  execute() {
    return this.projectRepo.findAll();
  }
}
