//
//  SplashViewController.swift
//  LimitlessChildren
//
//  Created by Techstirr on 10/03/2022.
//

import UIKit

final class SplashViewController: UIViewController {
  
  @IBOutlet private weak var splashImageView: UIImageView!
  @IBOutlet private weak var centerLogoImageView: UIImageView!
  
  @IBOutlet private weak var topImageView: UIImageView!
  @IBOutlet private weak var centerImageView: UIImageView!
//  @IBOutlet private weak var bottomImageView: UIImageView!
  
  private var dismissTimer: Timer?
  
  override func viewDidLoad() {
    super.viewDidLoad()
    addSplash()
  }
    
  private func addSplash() {
    topImageView.contentMode = .topRight
    centerImageView.contentMode = .scaleAspectFit
//    bottomImageView.contentMode = .bottomLeft
    
    topImageView.loadGif(name: "Pink-splash")
    centerImageView.loadGif(name: "resize")
//    bottomImageView.loadGif(name: "bottom")
  }
}
