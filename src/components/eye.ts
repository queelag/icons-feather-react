import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherEyeElement } from '@aracna/icons-feather-web/elements/eye-element'

export const IconFeatherEye: ElementComponent<IconFeatherEyeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEyeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-eye', IconFeatherEyeElement)
