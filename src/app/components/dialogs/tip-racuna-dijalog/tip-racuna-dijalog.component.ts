import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TipRacunaServisService } from '../../../services/tip-racuna-servis.service';

@Component({
  selector: 'app-tip-racuna-dijalog',
  templateUrl: './tip-racuna-dijalog.component.html',
  styleUrls: ['./tip-racuna-dijalog.component.css']
})
export class TipRacunaDijalogComponent implements OnInit {

  public flag: number;

    constructor(public snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<TipRacunaDijalogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public TipRacunaService: TipRacunaServisService) { }

    ngOnInit() {
    }

    public add(): void {
        this.data.id = -1;
        this.TipRacunaService.addTipRacuna(this.data);
        this.snackBar.open('Uspešno dodat TipRacuna: ' + this.data.naziv, 'U redu', { duration: 2500 });
    }

    public update(): void {
        this.TipRacunaService.updateTipRacuna(this.data);
        this.snackBar.open('Uspešno modifikovan TipRacuna: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public delete(): void {
        this.TipRacunaService.deleteTipRacuna(this.data.id);
        this.snackBar.open('Uspešno obrisan TipRacuna: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public cancel(): void {
        this.dialogRef.close();
        this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
    }
}
