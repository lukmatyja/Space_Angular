import { PilotValidators } from './../pilot-validators';
import { PilotService } from './../pilot.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private pilotService: PilotService ) { }

  form: FormGroup;

  ngOnInit() {
    this.route.data
    .pipe(map((data) => data.pilot))
    .subscribe((pilot) => {
      this.form = new FormGroup({
        id: new FormControl(pilot.id),
        firstName: new FormControl(pilot.firstName, {
          validators: [Validators.required, PilotValidators.uppercasedFirstLetter],
          asyncValidators: [PilotValidators.pilotForbidden]
        }),
        lastName: new FormControl(pilot.lastName, {
          validators: [Validators.required, PilotValidators.uppercasedFirstLetter],
          asyncValidators: [PilotValidators.pilotForbidden]
        }),
        imageUrl: new FormControl(pilot.imageUrl)
      },{updateOn: 'blur'});
    });
  }

  save(): void {
    const pilotAttrs = this.form.value;
    this.pilotService.savePilot(pilotAttrs).subscribe(
      () => this.router.navigate(['../..'], {relativeTo: this.route}),
      () => alert('Nie udało się zapisać pilota!')
    );
}

}
