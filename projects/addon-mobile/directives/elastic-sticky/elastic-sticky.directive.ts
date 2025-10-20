import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';

import {TuiElasticStickyService} from './elastic-sticky.service';

@Directive({
    standalone: true,
    selector: '[tuiElasticSticky]',
    providers: [TuiElasticStickyService],
    exportAs: 'tuiElasticSticky',
})
export class TuiElasticSticky {
    public readonly tuiElasticSticky = outputFromObservable(
        inject(TuiElasticStickyService),
    );
}
