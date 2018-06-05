import { Component, OnInit, Inject } from '@angular/core';
import { KlijentServisService } from '../../../services/klijent-servis.service';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-klijent-dijalog',
  templateUrl: './klijent-dijalog.component.html',
  styleUrls: ['./klijent-dijalog.component.css']
})
export class KlijentDijalogComponent implements OnInit {

  public flag: number;

    constructor(public snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<KlijentDijalogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public KlijentService: KlijentServisService) { }

    ngOnInit() {
    }

    public add(): void {
        this.data.id = -1;
        this.KlijentService.addKlijent(this.data);
        this.snackBar.open('Uspešno dodat Klijent: ' + this.data.ime, 'U redu', { duration: 2500 });
    }

    public update(): void {
        this.KlijentService.updateKlijent(this.data);
        this.snackBar.open('Uspešno modifikovan Klijent: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public delete(): void {
        this.KlijentService.deleteKlijent(this.data.id);
        this.snackBar.open('Uspešno obrisan Klijent: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public cancel(): void {
        this.dialogRef.close();
        this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
    }

}
