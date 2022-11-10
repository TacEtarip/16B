import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
})
export class MessageModalComponent implements OnInit {
  message: string;

  constructor(public config: DynamicDialogConfig) {
    this.message = this.config.data.message;
  }

  ngOnInit(): void {}
}
