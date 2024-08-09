import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPackageElement } from '@aracna/icons-feather-web/elements/package-element'

export const IconFeatherPackage: ElementComponent<IconFeatherPackageElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPackageElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-package', IconFeatherPackageElement)
