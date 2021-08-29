resource "random_pet" "lambda_bucket_name" {
  prefix = "learn-terraform-functions"
  length = 4
}

resource "aws_s3_bucket" "lambda_bucket" {
  bucket = random_pet.lambda_bucket_name.id

  acl           = "private"
  force_destroy = true
}

data "archive_file" "lambda_get_user" {
  type = "zip"

  source_dir  = "../src"
  output_path = "${path.module}/src.zip"
}

resource "aws_s3_bucket_object" "lambda_get_user" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key    = "src.zip"
  source = data.archive_file.lambda_get_user.output_path

  etag = filemd5(data.archive_file.lambda_get_user.output_path)
}
