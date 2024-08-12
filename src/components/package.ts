import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPackageElement } from '@aracna/icons-feather-web/elements/package-element'

export const IconFeatherPackage: ElementComponent<IconFeatherPackageElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPackageElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-package', IconFeatherPackageElement)
