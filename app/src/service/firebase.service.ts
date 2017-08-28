import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { W2GQuestion, W2GGame, Location } from './../shared/model/w2ggame.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

export class FireBaseService {

    constructor(private angularFire : AngularFireDatabase, private http: Http) {}

    public getAvailableEntryPoints(): Observable<Array<Location>> {
        return this.angularFire.list('/entryPoints');
    }

    public getNextQuestionFromCurrentLocation(gameName: string, questionIndex: number, latitude: number, longitude: number) : Promise<W2GQuestion> {
        return this.http.post('', {
            gameName: gameName,
            questionIndex: questionIndex,
            latitude: latitude,
            longitude: longitude
        }).map((response: Response) => response.json()).toPromise();
    }

    public saveW2GGame(game: W2GGame): Promise<void> {
        let ref = this.angularFire.database.ref('games').push(game);
        return new Promise(ref.then);
    }

}