import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamService } from '../../service/stream.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { map, of, Subscription, switchMap } from 'rxjs';
import { Mensagem } from '../../interfaces/mensagem.interface';

@Component({
  selector: 'app-stream',
  imports: [    
    MatSlideToggleModule,
    MatIconModule,
    ],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss'
})
export class StreamComponent implements OnInit, OnDestroy {
 
  videoUrl: string | null = null; 
  videoExists: boolean | null = null;
  mensagem: Mensagem | null = null;

  private route = inject(ActivatedRoute);
  private streamService = inject(StreamService);

  private inscricaoObs?: Subscription;

  ngOnInit(): void {
      this.inscricaoObs = this.route.queryParamMap.pipe(
        map(params => params.get('v')),
        switchMap(filename => {
          if (!filename) {
            this.videoUrl = null;
            this.videoExists = false;
            this.mensagem = {
              icon: 'info',
              title: 'Nenhum vídeo selecionado.',
              detail: 'Adicione um parâmetro ?v=nome-do-arquivo.mp4 na URL para assistir.',
            };
            return of(false);
          }

          this.videoUrl = this.streamService.getVideoUrl(filename);
          this.mensagem = null;
          return this.streamService.videoExists(filename);
        }),
      ).subscribe((exists: boolean) => {
        this.videoExists = exists;
        if (!exists && this.videoUrl) {
          this.mensagem = {
            icon: 'videocam_off',
            title: 'Oops! Este vídeo não está disponível no momento.',
            detail: 'Verifique se o arquivo foi enviado corretamente ou tente novamente mais tarde.',
          };
        }
      })
    
  }

  ngOnDestroy(): void {
    this.inscricaoObs?.unsubscribe();
  }

}
