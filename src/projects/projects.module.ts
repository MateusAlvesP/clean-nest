import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
//import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectsWithUseCaseController } from './projects-with-use-case.controller';
import { CreateProjectUseCase } from './use-cases/create-project.use-case';
import { FindAllProjecstUseCase } from './use-cases/find-all-projects.use-case';
import { StartProjectUseCase } from './use-cases/start-project.use-case';
import { ProjectTypeOrmRepository } from './project.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsWithUseCaseController],
  providers: [
    ProjectsService,
    CreateProjectUseCase,
    FindAllProjecstUseCase,
    StartProjectUseCase,
    ProjectTypeOrmRepository,
    {
      provide: 'IProjectRepository',
      useExisting: ProjectTypeOrmRepository,
    },
  ],
})
export class ProjectsModule {}
