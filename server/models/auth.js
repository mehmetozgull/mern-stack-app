import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 150
    },
    surname: {
        type: String,
        required: true,
        min: 3,
        max: 150
    },
    phone: {
        type: String,
        required: false,  // Telefon isteğe bağlı olabilir
        match: [/^5\d{2}\s\d{3}\s\d{2}\s\d{2}$/, 'Lütfen geçerli bir telefon numarası girin. (5xx xxx xx xx) formatında olmalı.'],
        minlength: 13,  // 5xx xxx xx xx toplamda 13 karakter
        maxlength: 13
    },
    email: {
        type: String,
        required: true,
        unique: true,  // E-posta adresi benzersiz olmalı
        match: [/.+\@.+\..+/, 'Lütfen geçerli bir e-posta adresi girin.']  // E-posta formatı kontrolü
    },
    password: {
        type: String,
        required: true,
        minlength: 6,  // Şifrenin en az 6 karakter olması gerekiyor
    },
    birthday: {
        type: Date,  // Doğum günü tarihi
        required: true,  // Doğum günü alanı zorunlu
    },
    createdAt: {
        type: Date,
        default: Date.now  // Kullanıcı oluşturulduğunda otomatik olarak eklenir
    }

})

export default mongoose.model("Auth", AuthSchema);