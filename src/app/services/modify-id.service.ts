import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ModifyIdService {
  add(id: number): number {
    return id + 100
  }
}
