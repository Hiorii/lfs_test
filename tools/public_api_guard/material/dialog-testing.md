## API Report File for "components-srcs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AsyncFactoryFn } from '@angular/cdk/testing';
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentType } from '@angular/cdk/overlay';
import { ContentContainerComponentHarness } from '@angular/cdk/testing';
import { DialogRole } from '@angular/material/dialog';
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatDialog } from '@angular/material/dialog';
import { _MatDialogBase } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogContainer } from '@angular/material/dialog';
import { _MatDialogContainerBase } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { OnDestroy } from '@angular/core';
import { TestElement } from '@angular/cdk/testing';

// @public
export interface DialogHarnessFilters extends BaseHarnessFilters {
}

// @public
export class MatDialogHarness extends _MatDialogHarnessBase {
    static hostSelector: string;
    static with(options?: DialogHarnessFilters): HarnessPredicate<MatDialogHarness>;
}

// @public
export class _MatDialogHarnessBase extends ContentContainerComponentHarness<MatDialogSection | string> {
    // (undocumented)
    protected _actions: AsyncFactoryFn<TestElement | null>;
    close(): Promise<void>;
    // (undocumented)
    protected _content: AsyncFactoryFn<TestElement | null>;
    getActionsText(): Promise<string>;
    getAriaDescribedby(): Promise<string | null>;
    getAriaLabel(): Promise<string | null>;
    getAriaLabelledby(): Promise<string | null>;
    getContentText(): Promise<string>;
    getId(): Promise<string | null>;
    getRole(): Promise<DialogRole | null>;
    getText(): Promise<string>;
    getTitleText(): Promise<string>;
    // (undocumented)
    protected _title: AsyncFactoryFn<TestElement | null>;
}

// @public
export const enum MatDialogSection {
    // (undocumented)
    ACTIONS = ".mat-dialog-actions",
    // (undocumented)
    CONTENT = ".mat-dialog-content",
    // (undocumented)
    TITLE = ".mat-dialog-title"
}

// @public
export class MatTestDialogOpener<T = unknown, R = unknown> extends _MatTestDialogOpenerBase<MatDialogContainer, T, R> {
    constructor(dialog: MatDialog);
    static withComponent<T = unknown, R = unknown>(component: ComponentType<T>, config?: MatDialogConfig): ComponentType<MatTestDialogOpener<T, R>>;
}

// @public
export class _MatTestDialogOpenerBase<C extends _MatDialogContainerBase, T, R> implements OnDestroy {
    constructor(dialog: _MatDialogBase<C>);
    closedResult: R | undefined;
    protected static component: ComponentType<unknown> | undefined;
    protected static config: MatDialogConfig | undefined;
    // (undocumented)
    dialog: _MatDialogBase<C>;
    dialogRef: MatDialogRef<T, R>;
    // (undocumented)
    ngOnDestroy(): void;
}

// @public (undocumented)
export class MatTestDialogOpenerModule {
}

// (No @packageDocumentation comment for this package)

```