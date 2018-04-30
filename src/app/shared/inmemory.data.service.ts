import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TradesBlotterEntity } from '../tradesblotter/tradesblotterentity';
import { VisaStockEntity } from '../visastock/visastockentity';
import { BankingEntity } from '../banking/bankingentity';
import { PriceBlotterBondEntity } from '../adapttableblotter/entities/priceblotterbondentity';
import { Document } from '../shareplace/document';
import { Employee } from "../shareplace/employee";

@Injectable()
export class InMemoryMockDataService implements InMemoryDbService {

    createDb() {

        const TradesBlotters: TradesBlotterEntity[] = [
            new TradesBlotterEntity(88, 319, 'TGT', 'US Bancrop', '10,000,000',
                'RBS', 'ZAR', 'Thaliland', 32.2945, 26.5582,
                'Baa1', 'assets/thailand.png'),
            new TradesBlotterEntity(217, 318, 'GD', 'Raytheon Company', '2,000,000',
                'Nomura', 'EUR', 'Spain', 92.1526, 133.4022,
                'B2', 'assets/spain.png'),
            new TradesBlotterEntity(248, 317, 'MRK', 'Merck & Co.', '10,000,000',
                'Rabobank', 'USD', 'Italy', 64.3045, 91.7614,
                'NR', 'assets/italy.png'),
            new TradesBlotterEntity(51, 316, 'SPG', 'Starbucks Corporation', '5,000,000',
                'MUFJ', 'EUR', 'Argentina', 88.2797, 136.4022,
                'Aa2', 'assets/argentina.png'),
            new TradesBlotterEntity(21, 315, 'SO', 'Microsoft', '2,000,000',
                'Credit Suisse', 'USD', 'Denmark', -77.7357, 74.3410,
                'Aa2', 'assets/dk.png'),
            new TradesBlotterEntity(224, 314, 'USB', 'Exelon', '7,500,000',
                'Credit Suisse', 'GBP', 'Luxemborg', -77.7357, 74.3410,
                'C', 'assets/luxembourg.png'),
            new TradesBlotterEntity(88, 319, 'TGT', 'US Bancrop', '10,000,000',
                'RBS', 'ZAR', 'Thaliland', 32.2945, 26.5582,
                'Baa1', 'assets/thailand.png'),
            new TradesBlotterEntity(217, 318, 'GD', 'Raytheon Company', '2,000,000',
                'Nomura', 'EUR', 'Spain', 92.1526, 133.4022,
                'B2', 'assets/spain.png'),
            new TradesBlotterEntity(248, 317, 'MRK', 'Merck & Co.', '10,000,000',
                'Rabobank', 'USD', 'Italy', 64.3045, 91.7614,
                'NR', 'assets/italy.png'),
            new TradesBlotterEntity(51, 316, 'SPG', 'Starbucks Corporation', '5,000,000',
                'MUFJ', 'EUR', 'Argentina', 88.2797, 136.4022,
                'Aa2', 'assets/argentina.png'),
            new TradesBlotterEntity(21, 315, 'SO', 'Microsoft', '2,000,000',
                'Credit Suisse', 'USD', 'Denmark', -77.7357, 74.3410,
                'Aa2', 'assets/dk.png'),
            new TradesBlotterEntity(224, 314, 'USB', 'Exelon', '7,500,000',
                'Credit Suisse', 'GBP', 'Luxemborg', -77.7357, 74.3410,
                'C', 'assets/luxembourg.png'),
            new TradesBlotterEntity(88, 319, 'TGT', 'US Bancrop', '10,000,000',
                'RBS', 'ZAR', 'Thaliland', 32.2945, 26.5582,
                'Baa1', 'assets/thailand.png'),
            new TradesBlotterEntity(217, 318, 'GD', 'Raytheon Company', '2,000,000',
                'Nomura', 'EUR', 'Spain', 92.1526, 133.4022,
                'B2', 'assets/spain.png'),
            new TradesBlotterEntity(248, 317, 'MRK', 'Merck & Co.', '10,000,000',
                'Rabobank', 'USD', 'Italy', 64.3045, 91.7614,
                'NR', 'assets/italy.png'),
            new TradesBlotterEntity(51, 316, 'SPG', 'Starbucks Corporation', '5,000,000',
                'MUFJ', 'EUR', 'Argentina', 88.2797, 136.4022,
                'Aa2', 'assets/argentina.png'),
            new TradesBlotterEntity(21, 315, 'SO', 'Microsoft', '2,000,000',
                'Credit Suisse', 'USD', 'Denmark', -77.7357, 74.3410,
                'Aa2', 'assets/dk.png'),
            new TradesBlotterEntity(224, 314, 'USB', 'Exelon', '7,500,000',
                'Credit Suisse', 'GBP', 'Luxemborg', -77.7357, 74.3410,
                'C', 'assets/luxembourg.png'),
            new TradesBlotterEntity(88, 319, 'TGT', 'US Bancrop', '10,000,000',
                'RBS', 'ZAR', 'Thaliland', 32.2945, 26.5582,
                'Baa1', 'assets/thailand.png'),
            new TradesBlotterEntity(217, 318, 'GD', 'Raytheon Company', '2,000,000',
                'Nomura', 'EUR', 'Spain', 92.1526, 133.4022,
                'B2', 'assets/spain.png'),
            new TradesBlotterEntity(248, 317, 'MRK', 'Merck & Co.', '10,000,000',
                'Rabobank', 'USD', 'Italy', 64.3045, 91.7614,
                'NR', 'assets/italy.png'),
            new TradesBlotterEntity(51, 316, 'SPG', 'Starbucks Corporation', '5,000,000',
                'MUFJ', 'EUR', 'Argentina', 88.2797, 136.4022,
                'Aa2', 'assets/argentina.png'),
            new TradesBlotterEntity(21, 315, 'SO', 'Microsoft', '2,000,000',
                'Credit Suisse', 'USD', 'Denmark', -77.7357, 74.3410,
                'Aa2', 'assets/dk.png'),
            new TradesBlotterEntity(224, 314, 'USB', 'Exelon', '7,500,000',
                'Credit Suisse', 'GBP', 'Luxemborg', -77.7357, 74.3410,
                'C', 'assets/luxembourg.png')

        ];
        const VisaStockEntities: VisaStockEntity[] = [
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76),
            new VisaStockEntity('2018-01-26', 125.77, 126.38, 124.76, 126.32, '5,604,949',
                0, 1, 127.00, 128.00, 125.77, 126.38, 124.76, 126.38, 124.76)

        ];
        const BankingEntities: BankingEntity[] = [

            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65),
            new BankingEntity('SavingAccount', 'BG10FINV91501003939179', 'EUR', 228.65, 228.65, 228.65)
        ];

        const PriceBlotterBondEntites: PriceBlotterBondEntity[] = [
            new PriceBlotterBondEntity('US035198AA89',
                'ANGOLA (3) 9.5 12Nov25',
                'Goverment',
                0.9796, 0.2, 0.8796, 1.072,
                'ARGENT', 0.0525, 'USD', 'SNRFOR',
                4, 0.038737174,
                'BB',
                'Argentina',
                'P8055KWB7'),
            new PriceBlotterBondEntity('USP04808AD61',
                'ARGENT (2) 7.5 22Apr26',
                'Goverment',
                1.015, 0.3, 0.865, 1.165,
                'ARGENT', 0.0635, 'USD', 'SNRFOR',
                2, 0.05512521,
                'NR',
                'Argentina',
                ''),
            new PriceBlotterBondEntity('USP04808AC88',
                'ARGENT (3) 7.5 22Apr26',
                'Goverment',
                1.0165, 0.3, 0.8665, 1.1665,
                'ARGENT', 0.031, 'USD', 'SNRFOR',
                3, 0.054965897,
                'BB',
                'Argentina',
                ''),
            new PriceBlotterBondEntity('US040114GT18',
                'ARGENT (4) 7.5 22Apr26',
                'Goverment',
                1.0235, 0.2, 0.9235, 1.1235,
                'ARGENT', 0.0385, 'USD', 'SNRFOR',
                3, 0.054222434,
                'BB',
                'Argentina',
                '040114GT1'),
            new PriceBlotterBondEntity('USP04808AB06',
                'ARGENT (5) 6.875 22Apr21',
                'Goverment',
                1.0345, 0.3, 0.8845, 1.1845,
                'ARGENT', 0.0725, 'USD', 'SNRFOR',
                3, 0.048142673,
                'BB',
                'Argentina',
                '040114GT1'),
        ];

        const employees: Employee[] = [
            new Employee('John Smith', 'Busy'),
            new Employee('Fred Varnes', 'Available'),
            new Employee('Linda May', 'Available'),
            new Employee('Kelly Francis', 'Available'),
            new Employee('Sam Fisher', 'Away'),
            new Employee('Ambrose Connor', 'Away')
        ]

        const Documents: Document[] = [
            new Document('March Sales.xlsx', 'Modified', new Date('March 6 2017'), employees[1], 'Sales Enablement/Reports'),
            new Document('Product FAQ.docx', 'Modified', new Date('March 6 2017'), employees[2], 'Sales Enablement/Products'),
            new Document('Customer Slide.pptx', 'Modified', new Date('February 21 2017'), employees[1], 'Sales Enablement/Products'),
            new Document('UltimateCore.pptx', 'Modified', new Date('January 17 2017'), employees[0], 'Sales Enablement/Products'),
            new Document('Customer Story.pdf', 'Uploaded', new Date('March 15 2017'), employees[4], 'Sales Enablement/Customers'),
            new Document('Release Schedule.docx', 'Uploaded', new Date('March 20 2017'), employees[3], 'Development/Teams'),
            new Document('TfsSettings.docx', 'Uploaded', new Date('February 6 2017'), employees[5], 'Development/Standards'),
            new Document('Best Practices.docx', 'Uploaded', new Date('February 19 2017'), employees[2], 'Development/Standards'),
            new Document('Future Ops.docx', 'Uploaded', new Date('January 6 2017'), employees[0], 'Development/Product'),
        ];


        return {
            'tradesblotters': TradesBlotters, 'visastocks': VisaStockEntities,
            'bankingentities': BankingEntities, 'Priceblotterbondentites': PriceBlotterBondEntites, 'sharePlaceDocuments': Documents
        };
    }
}
