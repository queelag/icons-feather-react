import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPackageElement } from '@aracna/icons-feather-web/elements/package-element'

export const IconFeatherPackage: ElementComponent<IconFeatherPackageElement, IconProps> = createBaseElementComponent<
  IconFeatherPackageElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-package', IconFeatherPackageElement)
