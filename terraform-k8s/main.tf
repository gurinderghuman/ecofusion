provider "google" {
 project = "eminent-yen-429707-d4"
region  = "us-central1"
zone    = "us-central1-c"
  credentials = file("C:/Users/dream/AppData/Roaming/gcloud/application_default_credentials.json")
}

resource "google_container_cluster" "primary" {
  name     = "primary-cluster"
  location = var.zone

  # Remove the initial_node_count as we're using a separately managed node pool
  remove_default_node_pool = true
  initial_node_count       = 1

  # It's recommended to enable Workload Identity
  workload_identity_config {
    workload_pool = "${var.project}.svc.id.goog"
  }
}

resource "google_container_node_pool" "primary_nodes" {
  name       = "primary-node-pool"
  location   = var.zone
  cluster    = google_container_cluster.primary.name
  node_count = 3

  node_config {
    machine_type = "e2-medium"

    # Enable Workload Identity on the node pool
    workload_metadata_config {
      mode = "GKE_METADATA"
    }
  }
}

output "kubernetes_cluster_name" {
  value = google_container_cluster.primary.name
}

output "kubernetes_cluster_host" {
  value = "https://${google_container_cluster.primary.endpoint}"
}

output "kubernetes_cluster_ca_certificate" {
  value     = base64decode(google_container_cluster.primary.master_auth[0].cluster_ca_certificate)
  sensitive = true
}