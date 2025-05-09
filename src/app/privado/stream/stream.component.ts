import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamService } from '../../service/stream.service';

@Component({
  selector: 'app-stream',
  imports: [],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss'
})
export class StreamComponent implements OnInit {
 
  videoUrl?: string; 
  filename!: string;
  
  private route = inject(ActivatedRoute);
  private streamService = inject(StreamService);

  ngOnInit(): void {
    this.filename = this.route.snapshot.paramMap.get("filename")!;
    this.videoUrl = this.streamService.getVideoUrl(this.filename);
  }


}
