import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    {
      titulo: 'Dubai',
      subtitulo: 'Pérola do Golfo e a Capital do Turismo',
      imagem: 'https://images.travelclass.tur.br/upload/2017/04/burj-al-arab-e-um-hotel-de-luxo-5-estrelas-construido-em-uma-ilha-artificial-em-frente-a-praia-de-jumeirah-6-1275x850.webp',
      descricao: 'Dubai é conhecida como a "Pérola do Golfo" e a "Capital do Turismo" dos Emirados Árabes Unidos. É também conhecida pela sua infraestrutura moderna, arranha-céus e grandes avenidas. ',
      curtidas: 0
    },
    {
      titulo: 'Rio de Janeiro',
      subtitulo: 'Cidade Maravilhosa',
      imagem: 'https://media.istockphoto.com/id/458295627/pt/foto/vista-a%C3%A9rea-do-rio-de-janeiro-refer%C3%AAncias.jpg?s=612x612&w=0&k=20&c=_K2ITb9ltX4H1vb5qpQg2chw_h1vg-kJtb_IxH75y58=',
      descricao: 'Rio de Janeiro é conhecida como Cidade Maravilhosa. Esse apelido é popularmente usado para se referir à cidade devido às suas praias, montanhas, vida boêmia e cartões-postais. ',
      curtidas: 0
    }
  ];

  curtir(card: any) {
    card.curtidas++;
  }

  compartilhar(card: any) {
    alert(`Você compartilhou: ${card.titulo}`);
  }
}
