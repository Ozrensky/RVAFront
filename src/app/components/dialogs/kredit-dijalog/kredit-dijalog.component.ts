import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { KreditServisService } from '../../../services/kredit-servis.service';

@Component({
  selector: 'app-kredit-dijalog',
  templateUrl: './kredit-dijalog.component.html',
  styleUrls: ['./kredit-dijalog.component.css']
})
export class KreditDijalogComponent implements OnInit {

  public flag: number;

    constructor(public snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<KreditDijalogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public KreditService: KreditServisService) { }

    ngOnInit() {
    }

    public add(): void {
        this.data.id = -1;
        this.KreditService.addKredit(this.data);
        this.snackBar.open('Uspešno dodat Kredit: ' + this.data.naziv, 'U redu', { duration: 2500 });
    }

    public update(): void {
        this.KreditService.updateKredit(this.data);
        this.snackBar.open('Uspešno modifikovan Kredit: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public delete(): void {
        this.KreditService.deleteKredit(this.data.id);
        this.snackBar.open('Uspešno obrisan Kredit: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public cancel(): void {
        this.dialogRef.close();
        this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
    }
}
