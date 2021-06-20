import {Component, OnInit} from '@angular/core';
import {Vendor} from '../../models/vendor.model';
import {VendorService} from '../../services/vendor.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss'],
})
export class VendorsComponent implements OnInit {
  vendors: Vendor[];

  selectedVendors!: Vendor[];

  constructor(private vendorService: VendorService) {}

  ngOnInit() {
    this.vendorService.getVendors().subscribe((data) => {
      this.vendors = data;
    });
  }
}
