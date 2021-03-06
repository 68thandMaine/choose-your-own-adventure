import { Injectable } from '@angular/core';
import { Player } from './models/player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
   }

   getPlayers(){
     return this.players;
   }

   getPlayersByName(userName: string){
     return this.database.object('players/' + userName)
   }

   addPlayer(player: Player){
     this.players.push(player);
   }
}
