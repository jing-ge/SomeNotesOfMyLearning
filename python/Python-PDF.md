###Python之PDF处理方法 使用PdfFileWriter
####使用方法：
	import PyPDF2
	  
	pdfFiles = []
	for filename in os.listdir('.'):
	if filename.endswith('.pdf'):
	pdfFiles.append(filename)
	print(pdfFiles)
	pdfWriter = PyPDF2.PdfFileWriter()
	  
	pdfFileObj = open(pdfFiles[0],'rb')
	pdfReader = PyPDF2.PdfFileReader(pdfFileObj) # 得到PdfFileReader对象
	first,end =map(int,input('从多少页到多少页(用空格隔开):').split())
	for pageNum in range(first-1,end):
	pageObj = pdfReader.getPage(pageNum)
	pdfWriter.addPage(pageObj)
	pdfOutput = open ('split_pdf.pdf','wb')
	pdfWriter.write(pdfOutput)
	pdfOutput.close()




	import PyPDF2
	merger = PyPDF2.PdfFileMerger()
	a = [str(i)+'webbook.pdf'for i in range(0,124)]
	for i in a:
	print(i)
	merger.append(open(i,'rb'))
	print("合并完成第"+str(i))
	with open('combintion.pdf','wb') as f:
	merger.write(f)