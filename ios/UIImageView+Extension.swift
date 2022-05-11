//
//  UIImageView+Extension.swift
//  LimitlessChildren
//
//  Created by Techstirr on 10/03/2022.
//

import UIKit

extension UIImageView {
  func loadGif(name: String) {
    let image = UIImage.gif(name: name)
    self.image = image
  }
}
