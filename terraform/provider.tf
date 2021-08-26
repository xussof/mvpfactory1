provider "aws"{
  region = "eu-west-1"
}

# Variables
variable "myregion" {
  type = string
  default = "eu-west-1"
}

variable "accountId" {
  type = string
  default = "490091177956"
}
