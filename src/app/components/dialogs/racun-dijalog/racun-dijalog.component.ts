import { Component, OnInit, Inject } from '@angular/core';
import { RacunServisService } from '../../../services/racun-servis.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-racun-dijalog',
  templateUrl: './racun-dijalog.component.html',
  styleUrls: ['./racun-dijalog.component.css']
})
export class RacunDijalogComponent implements OnInit {

  public flag: number;

    constructor(public snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<RacunDijalogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public RacunService: RacunServisService) { }

    ngOnInit() {
    }

    public add(): void {
        this.data.id = -1;
        this.RacunService.addRacun(this.data);
        this.snackBar.open('Uspešno dodat Racun: ' + this.data.naziv, 'U redu', { duration: 2500 });
    }

    public update(): void {
        this.RacunService.updateRacun(this.data);
        this.snackBar.open('Uspešno modifikovan Racun: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public delete(): void {
        this.RacunService.deleteRacun(this.data.id);
        this.snackBar.open('Uspešno obrisan Racun: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public cancel(): void {
        this.dialogRef.close();
        this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
    }

}
