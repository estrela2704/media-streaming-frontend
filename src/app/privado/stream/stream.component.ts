import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamService } from '../../service/stream.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-stream',
  imports: [    
    MatSlideToggleModule,
    MatIconModule,
    ],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss'
})
export class StreamComponent implements OnInit {
 
  videoUrl?: string; 
  filename!: string;
  isDarkMode = true;
  videoExists = false;

  private route = inject(ActivatedRoute);
  private streamService = inject(StreamService);

  ngOnInit(): void {
    this.filename = this.route.snapshot.paramMap.get("filename")!;
    this.videoUrl = this.streamService.getVideoUrl(this.filename);
    this.streamService.videoExists(this.videoUrl).subscribe(exists => {
      this.videoExists = exists
    })
  }

  toggleMode(){
    this.isDarkMode = !this.isDarkMode;
  }


}
