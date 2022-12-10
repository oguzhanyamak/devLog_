import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, MessageType: CMessageType,position:CPosition) {
    this.toastr[MessageType](message, title,{closeButton: true,progressBar:true,positionClass:position});
  }
}

export enum CMessageType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export enum CPosition{
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "top-center",
  BottomCenter = "bottom-center",
}
