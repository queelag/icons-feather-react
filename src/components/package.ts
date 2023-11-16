import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPackageElement } from '@aracna/icons-feather-web/elements/package-element'

export const IconFeatherPackage: ElementComponent<IconFeatherPackageElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPackageElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-package', IconFeatherPackageElement)
