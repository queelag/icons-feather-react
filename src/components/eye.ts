import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherEyeElement } from '@aracna/icons-feather-web/elements/eye-element'

export const IconFeatherEye: ElementComponent<IconFeatherEyeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEyeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-eye', IconFeatherEyeElement)
