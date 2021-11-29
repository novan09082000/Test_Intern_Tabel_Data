const { penduduk } = require('../models');

class pendudukController{
    static async findAll(req,res){
        let penduduks = await penduduk.findAll()
        res.status(200).json({status: 'success', data: penduduks})
    }
    static async store(req,res){
        let nip = req.body.Nip
        let namaLengkap = req.body.nama_lengkap
        let tanggalLahir = req.body.tanggal_lahir
        let tempatLahir = req.body.tempat_lahir
        // let createdAt = req.body.createdAt
        // let updatedAt = req.body.updateAt

        // let newtodo = penduduk.build({Nip: nip, nama_lengkap: namaLengkap, tanggal_lahir: tanggalLahir, tempat_lahir: tempatLahir});
        // await newtodo.save()

        let newtodo = penduduk.create({Nip: nip, nama_lengkap: namaLengkap, tanggal_lahir: tanggalLahir, tempat_lahir: tempatLahir})
        res.status(201).json({status: 'success', message : 'penduduk is saved', Nip: nip, nama_lengkap: namaLengkap, tanggal_lahir: tanggalLahir, tempat_lahir: tempatLahir})
        console.log(namaLengkap);
    }

    static async show(req,res){
        let nip = req.params.nip
        let penduduks = await penduduk.findOne({ where: { Nip: nip } });
        res.status(201).json({status: 'success', data: penduduks})
    }

    static async update(req,res){
        let namaLengkap = req.body.nama_lengkap
        let tanggalLahir = req.body.tanggal_lahir
        let tempatLahir = req.body.tempat_lahir
        let nip = req.params.nip
        let query = await penduduk.update({
            nama_lengkap: namaLengkap, tanggal_lahir: tanggalLahir, tempat_lahir: tempatLahir
        },{
            where: {
                Nip: nip 
            }
        })
        let penduduks = await penduduk.findOne({ where: { Nip: nip } });
        res.status(201).json({status: 'success', data: penduduks })
    }

    static async destroy(req,res){
        await penduduk.destroy({
            where: {
                nip: req.params.nip
            }
        })
        res.status(201).json({status: 'success', data: 'data is deleted'})
    }
}

module.exports = pendudukController