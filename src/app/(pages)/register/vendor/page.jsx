"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styles from "./page.module.css";

const RegisterVendor = () => {
  const [companyType, setCompanyType] = useState("");
  const [establishDate, setEstablishDate] = useState(null);
  const [companyPermit, setCompanyPermit] = useState("");
  const [companyOffice, setCompanyOffice] = useState("");

  const [officeProvince, setOfficeProvince] = useState("");
  const [officeDistrict, setOfficceDistrict] = useState("");
  const [officeSubDistrict, setOfficeSubDistrict] = useState("");

  const [provinces, setProvinces] = useState([{}]);
  const [districts, setDistricts] = useState([{}]);
  const [subDistricts, setSubDistricts] = useState([{}]);

  const fetchProvince = async () => {
    const res = await fetch("/api/provinces/");
    const data = await res.json();
    setProvinces(data);
  };

  const fetchDistrict = async (code) => {
    const res = await fetch(`/api/districts?id=${code}`);
    const data = await res.json();
    setDistricts(data);
  };

  const fetchSubDistrict = async (code) => {
    const res = await fetch(`/api/subdistricts?id=${code}`);
    const data = await res.json();
    setSubDistricts(data);
  };

  useEffect(() => {
    fetchProvince();
  }, []);

  const handleCompType = (event) => {
    setCompanyType(event.target.value);
  };

  const handleEstablishDate = (dataValue) => {
    console.log(dataValue);
    setEstablishDate(dataValue);
  };

  const handleCompPermit = (event) => {
    setCompanyPermit(event.target.value);
  };

  const handleCompOffice = (event) => {
    setCompanyOffice(event.target.value);
  };

  const handleOfficeProvince = (event) => {
    const code = event.target.value;
    setOfficeProvince(code);

    fetchDistrict(code);
  };

  const handleOfficeDistrict = (event) => {
    const code = event.target.value;
    setOfficceDistrict(code);

    fetchSubDistrict(code);
  };

  const handleOfficeSubdistrict = (event) => {
    const code = event.target.value;
    setOfficeSubDistrict(code);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>Registrasi Calon Rekanan</div>
        <div className={styles.subtitle}>Informasi Umum</div>
        <div className={styles.row}>
          <FormControl sx={{ minWidth: 170 }} size="small">
            <InputLabel id="input-company-type">Bentuk Usaha</InputLabel>
            <Select
              id="select-company-type"
              value={companyType}
              label="Bentuk Usaha"
              onChange={handleCompType}
            >
              <MenuItem value={"PT"}>PT</MenuItem>
              <MenuItem value={"CV"}>CV</MenuItem>
              <MenuItem value={"Perorangan"}>Perorangan</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="input-company-name"
            label="Nama Usaha"
            size="small"
            helperText="Tanpa PT atau CV"
            sx={{ width: 400 }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="cal-company-establish"
              label="Tanggal Berdiri"
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
              disableFuture={true}
              value={establishDate}
              onChange={(dateValue) => handleEstablishDate(dateValue)}
            />
          </LocalizationProvider>
        </div>
        <div className={styles.row}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Jenis Usaha(bisa lebih dari satu sesuai usaha yang dimiliki)
            </FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="barang"
                control={<Checkbox />}
                label="Barang"
                labelPlacement="end"
              />
              <FormControlLabel
                value="jasaKontruksi"
                control={<Checkbox />}
                label="Jasa Kontruksi"
                labelPlacement="end"
              />
              <FormControlLabel
                value="jasaKonsultasi"
                control={<Checkbox />}
                label="Jasa Konsultasi"
                labelPlacement="end"
              />
              <FormControlLabel
                value="jasaLainnya"
                control={<Checkbox />}
                label="Jasa Lainnya"
                labelPlacement="end"
              />
              <FormControlLabel
                value="sewaAlat"
                control={<Checkbox />}
                label="Sewa Alat"
                labelPlacement="end"
              />
              <FormControlLabel
                value="upah"
                control={<Checkbox />}
                label="Upah"
                labelPlacement="upah"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className={styles.row}>
          <TextField
            required
            id="input-company-npwp"
            label="NPWP"
            size="small"
          />
          <FormControl sx={{ minWidth: 170 }} size="small">
            <InputLabel id="input-company-permit">Tipe Berkas</InputLabel>
            <Select
              id="select-company-permit"
              value={companyPermit}
              label="Tipe Berkas"
              onChange={handleCompPermit}
            >
              <MenuItem value={"IUP"}>IUP</MenuItem>
              <MenuItem value={"IUJPU"}>IUJPU</MenuItem>
              <MenuItem value={"NIB"}>NIB</MenuItem>
              <MenuItem value={"SIUP"}>SIUP</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="button-company-role-number"
            label="Nomor Berkas"
            size="small"
          />
        </div>
        <div className={styles.subtitle}>Informasi Alamat</div>
        <div className={styles.row}>
          <FormControl sx={{ minWidth: 170 }} size="small">
            <InputLabel id="input-office-type">Tipe Kantor</InputLabel>
            <Select
              id="select-office-type"
              value={companyOffice}
              label="Tipe Kantor"
              onChange={handleCompOffice}
            >
              <MenuItem value={"pusat"}>Pusat</MenuItem>
              <MenuItem value={"cabang"}>Cabang</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="input-company-address"
            label="Alamat Kantor"
            size="small"
            sx={{ width: "70%" }}
          />
        </div>
        <div className={styles.row}>
          <FormControl sx={{ minWidth: 170 }} size="small">
            <InputLabel id="input-office-province">Pilih Propinsi</InputLabel>
            <Select
              id="select-office-province"
              value={officeProvince}
              label="Pilih Propinsi"
              onChange={handleOfficeProvince}
            >
              {provinces.map((data, index) => (
                <MenuItem key={index} value={data.code}>
                  {data.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 170 }} size="small">
            <InputLabel id="input-office-district">Pilih Kabupaten</InputLabel>
            <Select
              id="select-office-district"
              value={officeDistrict}
              label="Pilih Kabupaten"
              onChange={handleOfficeDistrict}
            >
              {districts.map((data, index) => (
                <MenuItem key={index} value={data.code}>
                  {data.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 170 }} size="small">
            <InputLabel id="input-office-subdistrict">
              Pilih Kecamatan
            </InputLabel>
            <Select
              id="select-office-subdistrict"
              value={officeSubDistrict}
              label="Pilih Kecamatan"
              onChange={handleOfficeSubdistrict}
            >
              {subDistricts.map((data, index) => (
                <MenuItem key={index} value={data.code}>
                  {data.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
            id="input-office-postal"
            label="Kode Pos"
            size="small"
          />
        </div>
        <div className={styles.subtitle}>Informasi Kontak</div>
        <div className={styles.row}>
          <TextField id="input-company-website" label="Website" size="small" />
          <TextField
            required
            id="input-company-phone"
            label="Nomor Telpon"
            size="small"
          />
          <TextField id="input-company-fax" label="Fax" size="small" />
        </div>
        <div className={styles.row}>
          <TextField
            required
            id="input-company-contact-person"
            label="Kontak Personal"
            size="small"
          />
          <TextField
            required
            id="input-company-ponsel"
            label="Nomor Ponsel"
            size="small"
          />
          <TextField
            required
            id="input-company-email"
            label="Email"
            size="small"
          />
        </div>
        <div className={styles.mandatory}>* wajid diisi</div>
      </div>
      <div className={styles.term}>
        <p>
          <Checkbox />
          Setuju terhadap syarat dan ketentuan pengadaan e-Proc Batamindo
        </p>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
};

export default RegisterVendor;
