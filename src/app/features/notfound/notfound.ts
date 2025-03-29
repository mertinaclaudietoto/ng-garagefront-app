import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { FloatingconfiguratorComponent } from '../../shared/components/floatingconfigurator/floatingconfigurator.component';
@Component({
    selector: 'app-notfound',
    standalone: true,
    imports: [RouterModule, FloatingconfiguratorComponent, ButtonModule],
    template: ` <app-floatingconfigurator />
        <div class="flex items-center justify-center min-h-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8 w-32 shrink-0" >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 15L27 3L44 15V35H10V15ZM10 13L27 3L44 13V35H10V13Z"
                        fill="#4CAF50"
                    />
                    <path
                        d="M10 15L27 3L44 15V35H10V15Z"
                        fill="none"
                        stroke="#4CAF50"
                        stroke-width="2"
                    />
                    <path
                        d="M10 35H44V33H10V35Z"
                        fill="#4CAF50"
                    />
                </svg>

                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center" style="border-radius: 53px">
                        <span class="text-primary font-bold text-3xl">404</span>
                        <h1 class="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-5xl mb-2">Not Found</h1>
                        <div class="text-surface-600 dark:text-surface-200 mb-8">Requested resource is not available.</div>
                      
                       
                      
                        <p-button label="Go to login" routerLink="/auth/login" />
                    </div>
                </div>
            </div>
        </div>`
})
export class Notfound {}
