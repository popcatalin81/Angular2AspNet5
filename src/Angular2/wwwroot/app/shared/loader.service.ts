import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import { serviceUrl } from "./service-config"
import "rxjs/add/operator/map";

@Injectable()
export class LoaderService {
    private cache: { [key: string]: any } = {};
    constructor(private http: Http) {
    }

    public get<T>(uri: string): Promise<T> {

        var promise = new Promise<T>((resolve, reject) => {
            var cached = this.cache[uri];
            if (cached)
                resolve(cached);
            else {
                var url = serviceUrl(uri);
                this.http.get(url)
                    .map<T>(x => x.json())
                    .subscribe(
                    data => {
                        this.cache[uri] = data;
                        resolve(data);
                    },
                    err => reject(err)
                    );
            }
        });

        return promise;
    }
}