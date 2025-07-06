import { Component } from '@angular/core';
import { listuserconv, message, Userchat } from './service/service.service';
import { ServiceService } from './service/service.service';
import { CommonModule } from '@angular/common';
import { ChatConversation } from './service/service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-message',
  imports: [CommonModule,FormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessagemaComponent {
  listConv: listuserconv[] = [];
  conv!: ChatConversation ;
  sendmessage: message = {
    sender: '',
    content: ' ',
    receiver: ''
  };
  alluser: Userchat[] = [];


  constructor(private service: ServiceService) {
    this.service.getListeUserConv(localStorage.getItem("iduser") ?? '').subscribe(table =>
    {
      this.listConv = table.data ?? []
    });
     this.service.getUserChat().subscribe(table =>
    {
      this.alluser = table.data ?? []
    });
  }
  getConv(sender: string) {
    this.sendmessage.receiver = sender;
    this.sendmessage.sender = localStorage.getItem("iduser")??'';
    this.service.getConofToUser(sender, localStorage.getItem("iduser") ?? '').subscribe(table => {
      console.log(sender +" "+localStorage.getItem("iduser"));
      this.conv = table.data ?? {sender:null,userConnected:null,message:[]}
    });
  }
 
  getTimeAgo(date: string | Date | null): string {
    if (date == null) {
      return '';
    }
    const diff = Date.now() - new Date(date).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'à l’instant';
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} h`;
    const days = Math.floor(hours / 24);
    return `${days} j`;
  }
  sendMessage() {
    this.service.sendMessage(this.sendmessage).subscribe(table =>
    {
      
      this.getConv(this.sendmessage.receiver);
    });
  }
  async onFileSelected(event: any) {
      const file: File = event.target.files[0];
      if (file) {
        const data = new FormData();
        data.append("file",file);
        data.append("upload_preset","projet_mean_images");
        data.append("cloud_name","dcufspbrh");
        const res =await fetch("https://api.cloudinary.com/v1_1/dcufspbrh/image/upload",{
          method:'POST',
          body:data
        })
        const urlImage = await res.json();
        this.sendmessage.content=urlImage.url;
    }
  }

  isImageUrl(url: string): boolean {
  
  const imagePattern = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|svg))/i;
    return imagePattern.test(url);
  }

   isOpen = false;
  selectedUser: any = null;

  users = [
    { id: 1, name: 'Jean Dupont' },
    { id: 2, name: 'Marie Curie' },
    { id: 3, name: 'Albert Einstein' }
  ];

  selectUser(user: any) {
    this.selectedUser = user;
    this.isOpen = false;
  }
}
