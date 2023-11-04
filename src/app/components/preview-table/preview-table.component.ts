import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { read, utils, WorkBook } from "xlsx";
import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";
import { NgForOf, NgIf, SlicePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-preview-table',
  standalone: true,
  templateUrl: './preview-table.component.html',
  imports: [
    NgbCollapse,
    SlicePipe,
    NgIf,
    NgForOf,
    FormsModule
  ],
  styleUrls: ['./preview-table.component.css']
})
export class PreviewTableComponent {
  data: string[][]
  private _previewData: Blob | undefined;
  previewWorkbook: WorkBook;
  isCollapsed: false;
  loading: boolean = false;
  numberOfRows: number = 10;

  constructor() {
  }

  @ViewChild('tableau') tabeller!: ElementRef<HTMLDivElement>;

  @Input() fileName: string | undefined;

  @Input()
  get previewData(): Blob {
    return this._previewData;
  }

  set previewData(data: Blob) {
    if (!data) {
      return
    }
    this.loading = true;
    data.arrayBuffer().then(arrayBuffer => {
      const wb = read(arrayBuffer);
      this.previewWorkbook = wb;
      const sheet = wb.Sheets[wb.SheetNames[0]]
      const currentRange = utils.decode_range(sheet["!ref"])
      const range = { s: currentRange.s, e: { r: Math.min(currentRange.e.r, 100), c: currentRange.e.c } };
      sheet["!ref"] = utils.encode_range(range)
      /* update data */
      this.data = utils.sheet_to_json(sheet, { header: 1 });

      this.loading = false
    })/* parse workbook */
    this._previewData = data;
  }

  onSave() {
    let url = window.URL.createObjectURL(this._previewData);
    const a = document.createElement("a");
    a.href = url;
    a.download = this.fileName
    a.click()
  }

  onChangeSheet(event: Event) {
    const select = event.target as HTMLSelectElement;

    this.data = utils.sheet_to_json(this.previewWorkbook.Sheets[select.value], {
      header: 1
    })
  }
}
