import { Component, OnInit } from '@angular/core';
import { listuserconv, message, Userchat,FiltreButton } from './service/service.service';
import { ServiceService } from './service/service.service';
import { CommonModule } from '@angular/common';
import { ChatConversation } from './service/service.service';
import { FormsModule,FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ à importer
import { RULE } from '../../../shared/data/RULE';

@Component({
  selector: 'app-message',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessagemaComponent implements OnInit {
  listConv: listuserconv[] = [];
  conv!: ChatConversation ;
  sendmessage: message = {
    sender: '',
    content: ' ',
    receiver: ''
  };
  alluser: Userchat[] = [];
  searchQuery: string='';
  searchControl = new FormControl('');
  filtreuser = new FormControl('tous');
  listConvFiltrer: listuserconv[] = [];
  isOpen = false;
  selectedUser: any = null;
  rechercheUser: any = [];
  listefiltreButton: FiltreButton[] = [
    {class: 'px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium',
    index:'',name:'Tous',rule:'tous'},{class: 'px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium',
    index:'1',name:'Client',rule:RULE.costumer},{class: 'px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium',
    index:'2',name:'Mécanicien',rule:RULE.mechanic},{class: 'px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium',
    index:'3',name:'Manager',rule:RULE.manager}
  ]
  constructor(private service: ServiceService) {
    this.service.getListeUserConv(localStorage.getItem("iduser") ?? '').subscribe(table =>
    {
      this.listConv = table.data ?? []
      this.listConvFiltrer = table.data ?? [];
    });
     this.service.getUserChat().subscribe(table =>
    {
      this.alluser = table.data ?? []
    });
  }
   ngOnInit() {
      this.searchControl.valueChanges
        .pipe(debounceTime(300))
        .subscribe((value) => {
          if (value != null) {
              const keyword = value.toLowerCase();
              this.rechercheUser = this.alluser.filter(user =>
                user.name.toLowerCase().includes(keyword)
              );
          }
            });
     this.filtreuser.valueChanges.subscribe((value) => {
          this.listefiltreButton = this.listefiltreButton.map(element => {
            return {
              ...element,
              class: element.rule == value
                ? "px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium"
                : "px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium"
            };
          });
        if (value === 'tous') {
          this.listConvFiltrer = this.listConv;
        } else { 
          if (value !=null) {
            const keyword = value.toLowerCase();
            this.listConvFiltrer = this.listConv.filter(user =>
              user.idrule.toLowerCase() === keyword
            );
          }
         
        }
      });
   }
  filtreUserByrule(key: string) {
    switch (key) {
      case '1':
        this.filtreuser.setValue(RULE.costumer); // on modifie la valeur, sans recréer le FormControl
        break;
      case '2':
        this.filtreuser.setValue(RULE.mechanic);
        break;
      case '3':
        this.filtreuser.setValue(RULE.manager);
        break;
      default:
        this.filtreuser.setValue('tous');
        break;
    }
  }
  getConv(sender: string,senderInfo:Userchat| null) {
    this.sendmessage.receiver = sender;
    this.sendmessage.sender = localStorage.getItem("iduser")??'';
    this.service.getConofToUser(sender, localStorage.getItem("iduser") ?? '').subscribe(table => {
      console.log(sender + " " + localStorage.getItem("iduser"));
      console.log(table.data)
      if (table.data?.sender==null) {
         this.conv = { sender: senderInfo == null ? null : senderInfo, userConnected: null, message: [] }
      } else {
         this.conv = table.data 
      }
      
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
      
      this.getConv(this.sendmessage.receiver,null);
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

  selectUser(user: Userchat) {
    this.sendmessage.receiver = user._id;
    this.sendmessage.sender = localStorage.getItem("iduser") ?? '';
    this.getConv(user._id,user);
    this.selectedUser = user;
    this.isOpen = false;
  }
  filteredUsers() {
    this.rechercheUser=this.alluser.filter(u => u.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

}
